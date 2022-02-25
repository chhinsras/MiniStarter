namespace API.Interfaces;
 public interface ITemplateService
{
    Task<string> RenderAsync<TViewModel>(string templateFileName, TViewModel viewModel);
}