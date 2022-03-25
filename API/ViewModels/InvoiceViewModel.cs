namespace API.ViewModels;
public class InvoiceViewModel : IViewModel
{
    public DateTime CreatedAt { get; set; }
    public DateTime Due { get; set; }
    public int Id { get; set; }
    public string? AddressLine { get; set; }
    public string? City { get; set; }
    public string? ZipCode { get; set; }
    public string? CompanyName { get; set; }
    public string? PaymentMethod { get; set; }
    public decimal Amount
    {
        get
        {
            return Items?.Count > 0 ? Items.Sum(i => i.Amount) : 0;
        }
    }

    public ICollection<InvoiceItemViewModel>? Items { get; set; }
}

public class InvoiceItemViewModel
{
    public string Name { get; set; }
    public decimal Amount { get; set; }

    public InvoiceItemViewModel(string name, decimal amount)
    {
        Name = name;
        Amount = amount;
    }
}