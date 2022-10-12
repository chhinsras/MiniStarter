namespace API.Controllers;
public sealed class GazetteersController : BaseApiController
{
    private readonly DataContext _context;
    private readonly IStringLocalizer<GazetteersController> _localizer;

    public GazetteersController(DataContext context, IStringLocalizer<GazetteersController> localizer)
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
    public async Task<IActionResult> GetProvinceByCode(int code)
    { 
        var model = await _context.Provinces.Where(x => x.Code == code).SingleOrDefaultAsync();
        if (model == null) return NotFound();
        return Ok(model.Adapt<List<AuditDto>>());
    }

    [HttpPost("provinces")]
    [MustHavePermission(Permissions.Provinces.Create)]
    public async Task<ActionResult> CreateProvince([FromBody] ProvinceDto provinceDto)
    {
        var model = await _context.Provinces.SingleOrDefaultAsync(x => x.Code == provinceDto.Code);
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
        var model = await _context.Provinces.SingleOrDefaultAsync(x => x.Code == provinceDto.Code);
        if (model == null) return NotFound();
        model = provinceDto.Adapt<Province>();
        _context.Update(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedUpdate"]});
        return Ok();
    }

    [HttpDelete("provinces/{code}")]
    [MustHavePermission(Permissions.Provinces.Delete)]
    public async Task<IActionResult> DeleteProvince(int code)
    {
        var model = await _context.Provinces.SingleOrDefaultAsync(x => x.Code == code);
        if (model == null) return NotFound();
        _context.Remove(model);
        if (await _context.SaveChangesAsync() == 0) return BadRequest(new ProblemDetails { Title = _localizer["Entity.FailedDelete"]});
        return Ok();
    }
    #endregion

}
