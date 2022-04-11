namespace API.ViewModels;
public class TableViewModel<T> : IViewModel
{
    public TableViewModel(List<T> items)
    {
        this.items = items;
    }

    public List<T> items { get; set; } = default!;
}
