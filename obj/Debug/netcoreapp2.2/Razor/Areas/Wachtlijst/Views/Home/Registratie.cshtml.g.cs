#pragma checksum "C:\Users\Nicolas\Desktop\MarktenEnForenWeb\src\MarktenEnForenWeb\Areas\Wachtlijst\Views\Home\Registratie.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f2918c7df8dd5b0c07971403ddb782dbf63c853e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Wachtlijst_Views_Home_Registratie), @"mvc.1.0.view", @"/Areas/Wachtlijst/Views/Home/Registratie.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Wachtlijst/Views/Home/Registratie.cshtml", typeof(AspNetCore.Areas_Wachtlijst_Views_Home_Registratie))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f2918c7df8dd5b0c07971403ddb782dbf63c853e", @"/Areas/Wachtlijst/Views/Home/Registratie.cshtml")]
    public class Areas_Wachtlijst_Views_Home_Registratie : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 5928, true);
            WriteLiteral(@"<div class=""row"">
    <h2>Registraties</h2>
</div>

<div class=""row"">
    <div class=""col-md-3"">
        <div class=""input-group"">
            <input class=""form-control"" value="""">
            <span class=""input-group-addon"" style=""background-color: #428bca; border-color: #357ebd"">
                <i class=""fa fa-search btn-primary"" style=""background-color: #428bca""></i>
            </span>
        </div>
    </div>
</div>

<p></p>

<div class=""row"">
    <div class=""col-md-2"">
        <select class=""form-control"">
            <option value="""">- Districten -</option>
            <option value=""1"">Test1</option>
            <option value=""2"">Test2</option>
        </select>
    </div>
    <div class=""col-md-3"">
        <div class=""input-group"">
            <label>
                <input type=""checkbox""> Toon enkel toe te wijzen
            </label>
        </div>
    </div>
</div>

<div class=""dataTables_wrapper"" role=""grid"">
    <div class=""row"">
        <div class=""col-xs-1");
            WriteLiteral(@"2 col-sm-2 col-md-2"">
            <div id=""datatable_processing"" class=""dataTables_processing"" style=""visibility: hidden;"">
                <i class=""fa fa-spinner fa-spin""></i>
            </div>
        </div>
        <div class=""col-xs-12 col-sm-10 col-md-10 text-right hide"">
            <div class=""dataTables_filter"">
                <label>
                    <i class=""fa fa-search""></i> <input type=""text"" aria-controls=""datatable"">
                </label>
            </div>
        </div>
    </div>
    <table class=""table table-hover table-striped dataTable"" width=""100%"" aria-describedby=""datatable_info"" style=""width: 100%;"">
        <thead>
            <tr role=""row"">
                <th class=""sorting_asc"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label=""District: activate to sort column ascending"" style=""width: 577px;"">District</th>
                <th class=""sorting"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""");
            WriteLiteral(@"1"" colspan=""1"" aria-label=""Weekdag: activate to sort column ascending"" style=""width: 846px;"">Weekdag</th>
                <th class=""sorting"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label=""Locatie: activate to sort column ascending"" style=""width: 846px;"">Locatie</th>
                <th class=""sorting"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label=""Markt: activate to sort column ascending"" style=""width: 846px;"">Markt</th>
                <th class=""text-right sorting"" role=""columnheader"" tabindex=""0"" aria-controls=""datatable"" rowspan=""1"" colspan=""1"" aria-label="": activate to sort column ascending"" style=""width: 187px;""></th>
            </tr>
        </thead>
        <tbody role=""alert"" aria-live=""polite"" aria-relevant=""all"">
            <tr class=""odd"">
                <td class="" sorting_1"">District 1</td>
                <td class="""">Weekdag 1</td>
                <td class="""">Locatie 1</td>
         ");
            WriteLiteral(@"       <td class="""">Markt 1</td>
                <td class=""text-right"">
                    <span class=""badge bg-danger"">2</span>&nbsp;
                    <span class=""badge bg-succes"">5</span>&nbsp;
                    <i class=""fa fa-caret-right"">
                        <span style=""display:none"">4</span>
                    </i>
                </td>
            </tr>
            <tr class=""even"">
                <td class="" sorting_1"">District 2</td>
                <td class="""">Weekdag 2</td>
                <td class="""">Locatie 2</td>
                <td class="""">Markt 2</td>
                <td class=""text-right"">
                    <span class=""badge bg-danger"">1</span>&nbsp;
                    <span class=""badge bg-succes"">2</span>&nbsp;
                    <i class=""fa fa-caret-right"">
                        <span style=""display:none"">4</span>
                    </i>
                </td>
            </tr>
        </tbody>
    </table>
    <div class=""row"">
        <");
            WriteLiteral(@"div class=""col-md-2"">
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
                <a tabindex=""0"" class=""first paginate_button paginate_button_disabled"" id=""datatable_first"">
                    <i class=""fa fa-fast-backward""></i>");
            WriteLiteral(@"
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