namespace API.ViewModels;
public class TableViewModel
{
    public TableViewModel(List<DistrictDto> items)
    {
        this.items = items;
    }

    public List<DistrictDto> items { get; set; } = default!;
}
