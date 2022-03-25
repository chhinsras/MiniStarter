namespace API.ViewModels;
public class TableViewModel : IViewModel
{
    public TableViewModel(List<DistrictDto> items)
    {
        this.items = items;
    }

    public List<DistrictDto> items { get; set; } = default!;
}
