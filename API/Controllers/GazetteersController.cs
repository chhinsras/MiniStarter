namespace API.Controllers;
public sealed class GazetteersController : BaseApiController
{
    private readonly DataContext _context;
    private readonly StringLocalizer<GazetteersController> _localizer;

    public GazetteersController(DataContext context, StringLocalizer<GazetteersController> localizer)
    {
        _context = context;
        _localizer = localizer;
    }

    #region Province Endpoints

    [HttpGet("provinces")]
    [MustHavePermission(Permissions.Provinces.View)]
    public async Task<ActionResult<List<ProvinceDto>>> GetAllProvinces()
    {
        var modelList = await _context.Provinces.ToListAsync();
        return Ok(modelList.Adapt<List<ProvinceDto>>());
    }

    [HttpGet("provinces/{code}")]
    [MustHavePermission(Permissions.Provinces.View)]
    public async Task<ActionResult<ProvinceDto>> GetProvinceByCode(int code)
    { 
        var model = await _context.Provinces.Where(x => x.Code == code).SingleOrDefaultAsync();
        if (model == null) return NotFound();
        return Ok(model.Adapt<ProvinceDto>());
    }

    [HttpPost("provinces")]
    [MustHavePermission(Permissions.Provinces.Create)]
    public async Task<ActionResult> CreateProvince([FromBody] ProvinceDto provinceDto)
    {
        var model = await _context.Provinces.AsNoTracking().SingleOrDefaultAsync(x => x.Code == provinceDto.Code);
        if (model != null) return BadRequest(new ProblemDetails { Title = _localizer["Entity.AlreadyExisted"]});
        model = provinceDto.Adapt<Province>();
        await _context.AddAsync(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails {Title = _localizer["Entity.FailedCreate"] });
        return Ok();
    }

    [HttpPut("provinces")]
    [MustHavePermission(Permissions.Provinces.Edit)]
    public async Task<ActionResult> UpdateProvince([FromBody] ProvinceDto provinceDto)
    {
        var model = await _context.Provinces.AsNoTracking().SingleOrDefaultAsync(x => x.Code == provinceDto.Code);
        if (model == null) return NotFound();
        model = provinceDto.Adapt<Province>();
        _context.Update(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedUpdate"]});
        return Ok();
    }

    [HttpDelete("provinces/{code}")]
    [MustHavePermission(Permissions.Provinces.Delete)]
    public async Task<ActionResult> DeleteProvince(int code)
    {
        var model = await _context.Provinces.SingleOrDefaultAsync(x => x.Code == code);
        if (model == null) return NotFound();
        _context.Remove(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedDelete"]});
        return Ok();
    }
    #endregion

    #region District Endpoints

    [HttpGet("districts")]
    [MustHavePermission(Permissions.Districts.View)]
    public async Task<ActionResult<List<DistrictDto>>> GetAllDistricts()
    {
        var modelList = await _context.Districts.ToListAsync();
        return Ok(modelList.Adapt<List<DistrictDto>>());
    }

    [HttpGet("districts/byProvince/{provinceCode}")]
    [MustHavePermission(Permissions.Districts.View)]
    public async Task<ActionResult<List<DistrictDto>>> GetAllDistrictsByProvince(int provinceCode)
    {
        var modelList = await _context.Districts.Where(x => x.ProvinceCode == provinceCode).ToListAsync();
        return Ok(modelList.Adapt<List<DistrictDto>>());
    }

    [HttpGet("districts/{code}")]
    [MustHavePermission(Permissions.Districts.View)]
    public async Task<ActionResult> GetDistrictByCode(int code)
    {
        var model = await _context.Districts.Where(x => x.Code == code).SingleOrDefaultAsync();
        if (model == null) return NotFound();
        return Ok(model.Adapt<DistrictDto>());
    }

    [HttpPost("districts")]
    [MustHavePermission(Permissions.Districts.Create)]
    public async Task<ActionResult> CreateDistrict([FromBody] DistrictDto districtDto)
    {
        var model = await _context.Districts.AsNoTracking().SingleOrDefaultAsync(x => x.Code == districtDto.Code);
        if (model != null) return BadRequest(new ProblemDetails { Title = _localizer["Entity.AlreadyExisted"]});
        model = districtDto.Adapt<District>();
        await _context.AddAsync(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails {Title = _localizer["Entity.FailedCreate"] });
        return Ok();
    }

    [HttpPut("districts")]
    [MustHavePermission(Permissions.Districts.Edit)]
    public async Task<ActionResult> UpdateDistrict([FromBody] DistrictDto districtDto)
    {
        var model = await _context.Districts.AsNoTracking().SingleOrDefaultAsync(x => x.Code == districtDto.Code);
        if (model == null) return NotFound();
        model = districtDto.Adapt<District>();
        _context.Update(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedUpdate"]});
        return Ok();
    }

    [HttpDelete("districts/{code}")]
    [MustHavePermission(Permissions.Districts.Delete)]
    public async Task<ActionResult> DeleteDistrict(int code)
    {
        var model = await _context.Districts.SingleOrDefaultAsync(x => x.Code == code);
        if (model == null) return NotFound();
        _context.Remove(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedDelete"]});
        return Ok();
    }

    #endregion

    #region Commune Endpoints

    [HttpGet("communes")]
    [MustHavePermission(Permissions.Communes.View)]
    public async Task<ActionResult<List<CommuneDto>>> GetAllCommunes()
    {
        var modelList = await _context.Communes.ToListAsync();
        return Ok(modelList.Adapt<List<CommuneDto>>());
    }

    [HttpGet("communes/byDistrict/{districtCode}")]
    [MustHavePermission(Permissions.Communes.View)]
    public async Task<ActionResult<List<CommuneDto>>> GetAllCommunesByDistrict(int districtCode)
    {
         var modelList = await _context.Communes.Where(x => x.DistrictCode == districtCode).ToListAsync();
        return Ok(modelList.Adapt<List<CommuneDto>>());
    }

    [HttpGet("communes/{code}")]
    [MustHavePermission(Permissions.Communes.View)]
    public async Task<ActionResult<CommuneDto>> GetCommuneByCode(int code)
    {
        var model = await _context.Communes.Where(x => x.Code == code).SingleOrDefaultAsync();
        if (model == null) return NotFound();
        return Ok(model.Adapt<CommuneDto>());
    }

    [HttpPost("communes")]
    [MustHavePermission(Permissions.Communes.Create)]
    public async Task<ActionResult> CreateCommune([FromBody] CommuneDto communeDto)
    {
        var model = await _context.Communes.AsNoTracking().SingleOrDefaultAsync(x => x.Code == communeDto.Code);
        if (model != null) return BadRequest(new ProblemDetails { Title = _localizer["Entity.AlreadyExisted"]});
        model = communeDto.Adapt<Commune>();
        await _context.AddAsync(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails {Title = _localizer["Entity.FailedCreate"] });
        return Ok();
    }

    [HttpPut("communes")]
    [MustHavePermission(Permissions.Communes.Edit)]
    public async Task<ActionResult> UpdateCommune([FromBody] CommuneDto communeDto)
    {
        var model = await _context.Communes.AsNoTracking().SingleOrDefaultAsync(x => x.Code == communeDto.Code);
        if (model == null) return NotFound();
        model = communeDto.Adapt<Commune>();
        _context.Update(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedUpdate"]});
        return Ok();
    }

    [HttpDelete("communes/{code}")]
    [MustHavePermission(Permissions.Communes.Delete)]
    public async Task<ActionResult> DeleteCommune(int code)
    {
        var model = await _context.Communes.SingleOrDefaultAsync(x => x.Code == code);
        if (model == null) return NotFound();
        _context.Remove(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedDelete"]});
        return Ok();
    }

    #endregion

    #region Village Endpoints

    [HttpGet("villages")]
    [MustHavePermission(Permissions.Villages.View)]
    public async Task<ActionResult<List<VillageDto>>> GetAllVillages()
    {
        var modelList = await _context.Villages.ToListAsync();
        return Ok(modelList.Adapt<List<VillageDto>>());
    }

    [HttpGet("villages/byCommune/{communeCode}")]
    [MustHavePermission(Permissions.Villages.View)]
    public async Task<ActionResult<List<VillageDto>>> GetAllVillagesByCommune(int communeCode)
    {
        var modelList = await _context.Villages.Where(x => x.CommuneCode == communeCode).ToListAsync();
        return Ok(modelList.Adapt<List<DistrictDto>>());
    }

    [HttpGet("villages/{code}")]
    [MustHavePermission(Permissions.Villages.View)]
    public async Task<ActionResult> GetVillageByCode(int code)
    {
        var model = await _context.Villages.Where(x => x.Code == code).SingleOrDefaultAsync();
        if (model == null) return NotFound();
        return Ok(model.Adapt<VillageDto>());
    }

    [HttpPost("villages")]
    [MustHavePermission(Permissions.Villages.Create)]
    public async Task<ActionResult> CreateVillage([FromBody] VillageDto villageDto)
    {
        var model = await _context.Villages.AsNoTracking().SingleOrDefaultAsync(x => x.Code == villageDto.Code);
        if (model != null) return BadRequest(new ProblemDetails { Title = _localizer["Entity.AlreadyExisted"]});
        model = villageDto.Adapt<Village>();
        await _context.AddAsync(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails {Title = _localizer["Entity.FailedCreate"] });
        return Ok();
    }

    [HttpPut("villages")]
    [MustHavePermission(Permissions.Villages.Edit)]
    public async Task<ActionResult> UpdateVillage([FromBody] VillageDto villageDto)
    {
        var model = await _context.Villages.AsNoTracking().SingleOrDefaultAsync(x => x.Code == villageDto.Code);
        if (model == null) return NotFound();
        model = villageDto.Adapt<Village>();
        _context.Update(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedUpdate"]});
        return Ok();
    }

    [HttpDelete("villages/{code}")]
    [MustHavePermission(Permissions.Villages.Delete)]
    public async Task<ActionResult> DeleteVillage(int code)
    {
        var model = await _context.Villages.SingleOrDefaultAsync(x => x.Code == code);
        if (model == null) return NotFound();
        _context.Remove(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedDelete"]});
        return Ok();
    }

    #endregion
}
