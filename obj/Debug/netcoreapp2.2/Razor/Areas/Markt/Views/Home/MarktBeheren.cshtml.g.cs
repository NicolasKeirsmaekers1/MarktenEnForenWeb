#pragma checksum "C:\Users\Nicolas\Desktop\MarktenEnForenWeb\src\MarktenEnForenWeb\Areas\Markt\Views\Home\MarktBeheren.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "42511eabc7d4a898432ff4f2a0fa2e6554e10f6f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Markt_Views_Home_MarktBeheren), @"mvc.1.0.view", @"/Areas/Markt/Views/Home/MarktBeheren.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Markt/Views/Home/MarktBeheren.cshtml", typeof(AspNetCore.Areas_Markt_Views_Home_MarktBeheren))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"42511eabc7d4a898432ff4f2a0fa2e6554e10f6f", @"/Areas/Markt/Views/Home/MarktBeheren.cshtml")]
    public class Areas_Markt_Views_Home_MarktBeheren : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 5016, true);
            WriteLiteral(@"<div class=""row"">
    <h2>Markten</h2>
</div>

<div class=""row"">
    <div class=""col-md-3 form-group"">
        <div class=""input-group"">
            <input class=""form-control"" value="""">
            <span class=""input-group-addon"" style=""background-color: #428bca; border-color: #357ebd"">
                <i class=""fa fa-search btn-primary"" style=""background-color: #428bca""></i>
            </span>
        </div>
    </div>
    <div class=""col-md-3 form-group pull-right"">
        <a class=""btn btn-primary pull-right""><i class=""fa fa-plus""></i>&nbsp;Nieuwe Markt</a>
    </div>
</div>

<div class=""dataTables_wrapper"" role=""grid"">
    <div class=""row"">
        <div class=""col-xs-12 col-sm-2 col-md-2"">
            <div id=""datatable_processing"" class=""dataTables_processing"" style=""visibility: hidden;"">
                <i class=""fa fa-spinner fa-spin""></i>
            </div>
        </div>
        <div class=""col-xs-12 col-sm-10 col-md-10 text-right hide"">
            <div class=""dataTables");
            WriteLiteral(@"_filter"">
                <label>
                    <i class=""fa fa-search""></i> <input type=""text"" aria-controls=""datatable"">
                </label>
            </div>
        </div>
    </div>
    <table class=""table table-hover table-striped dataTable"" width=""100%"" aria-describedby=""datatable_info"" style=""width: 100%;"">
        <thead>
            <tr role=""row"">
                <th class=""sorting_asc"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label=""Naam: activate to sort column ascending"" style=""width: 577px;"">Naam</th>
                <th class=""sorting"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label=""Afkorting: activate to sort column ascending"" style=""width: 846px;"">Afkorting</th>
                <th class=""text-right sorting"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label="": activate to sort column ascending"" style=""width: 187px;""></th>
         ");
            WriteLiteral(@"   </tr>
        </thead>
        <tbody role=""alert"" aria-live=""polite"" aria-relevant=""all"">
            <tr class=""odd"">
                <td class="" sorting_1"">Markt 1</td>
                <td class="""">Afkorting markt 1</td>
                <td class=""text-right"">
                    <a href=""#"" class=""btn btn-primary btn-xs btn-edit"" data-url=""/Markt/Edit/17""><i class=""fa fa-pencil""></i></a>
                    <a href=""#"" class=""btn btn-danger btn-xs btn-delete"" data-url=""/Markt/Delete/17""><i class=""fa fa-trash-o""></i></a>
                </td>
            </tr>
            <tr class=""even"">
                <td class="" sorting_1"">Markt 2</td>
                <td class="""">Afkorting markt 2</td>
                <td class=""text-right"">
                    <a href=""#"" class=""btn btn-primary btn-xs btn-edit"" data-url=""/Markt/Edit/17""><i class=""fa fa-pencil""></i></a>
                    <a href=""#"" class=""btn btn-danger btn-xs btn-delete"" data-url=""/Markt/Delete/17""><i class=""fa fa-trash-o""></i>");
            WriteLiteral(@"</a>
                </td>
            </tr>
        </tbody>
    </table>
    <div class=""row"">
        <div class=""col-md-2"">
            <div id=""datatable_length"" class=""dataTables_length"">
                <label>
                    &nbsp;&nbsp;Toon <select size=""1"" name=""datatable_length"" aria-controls=""datatable"">
                        <option value=""10"" selected=""selected"">10</option>
                        <option value=""25"">25</option>
                        <option value=""50"">50</option>
                        <option value=""100"">100</option>
                    </select> records
                </label>
            </div>
        </div>
        <div class=""col-md-5 text-center"">
            <div class=""dataTables_info"" id=""datatable_info"">1 t.e.m. xxx van zzz records</div>
        </div>
        <div class=""col-md-5 text-right"">
            <div class=""dataTables_paginate paging_full_numbers"" id=""datatable_paginate"">
                <a tabindex=""0"" class=""first paginate");
            WriteLiteral(@"_button paginate_button_disabled"" id=""datatable_first"">
                    <i class=""fa fa-fast-backward""></i>
                </a>
                <a tabindex=""0"" class=""previous paginate_button paginate_button_disabled"" id=""datatable_previous"">
                    <i class=""fa fa-backward""></i>
                </a><span>
                    <a tabindex=""0"" class=""paginate_active"">1</a>
                    <a tabindex=""0"" class=""paginate_button"">2</a>
                    <a tabindex=""0"" class=""paginate_button"">3</a>
                    <a tabindex=""0"" class=""paginate_button"">4</a>
                </span><a tabindex=""0"" class=""next paginate_button"" id=""datatable_next"">
                    <i class=""fa fa-forward""></i>
                </a><a tabindex=""0"" class=""last paginate_button"" id=""datatable_last""><i class=""fa fa-fast-forward""></i></a>
            </div>
        </div>
    </div>
</div>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591