#pragma checksum "C:\Users\Nicolas\Desktop\MarktenEnForenWeb\src\MarktenEnForenWeb\Areas\Markt\Views\Home\Typology.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "77abb6b9c166d964dfd4c3f66af3726de9fb4ff0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Markt_Views_Home_Typology), @"mvc.1.0.view", @"/Areas/Markt/Views/Home/Typology.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Markt/Views/Home/Typology.cshtml", typeof(AspNetCore.Areas_Markt_Views_Home_Typology))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"77abb6b9c166d964dfd4c3f66af3726de9fb4ff0", @"/Areas/Markt/Views/Home/Typology.cshtml")]
    public class Areas_Markt_Views_Home_Typology : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 565, true);
            WriteLiteral(@"<h1>Typology</h1>

<div class=""row"">
    <div class=""col-md-3"">
        <div class=""form-group"">
            <label>Text field</label>
            <input class=""form-control"" id=""Body_Firmanaam"" name=""Body.Firmanaam"" type=""text"" value="""">
            <div class=""help-block"">A block of help text that breaks onto a new line and may extend beyond one line.</div>
        </div>
        <div class=""form-group"">
            <label>Email field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon1"">");
            EndContext();
            BeginContext(566, 4387, true);
            WriteLiteral(@"@</span>
                <input type=""email"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon1"">
            </div>
        </div>
        <div class=""form-group"">
            <label>Phone field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon2""><i class=""fa fa-phone"" aria-hidden=""true""></i></span>
                <input type=""tel"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon2"">
            </div>
        </div>
        <div class=""form-group"">
            <label>Number field</label>
            <div class=""input-group"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""down"">
                        <i class=""fa fa-minus""></i>
                    </button>
                </span>
                <input type=""text"" class=""form-control"" aria-label=""Amount (to the nearest dollar)"">
                <sp");
            WriteLiteral(@"an class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""up"">
                        <i class=""fa fa-plus""></i>
                    </button>
                </span>
            </div>
        </div>
        <div class=""form-group"">
            <label>Select field</label>
            <select class=""form-control"" id=""Body_JuridischeEntiteitId"" name=""Body.JuridischeEntiteitId"">
                <option value="""">--</option>
                <option value=""1"">Test1</option>
                <option value=""2"">Test2</option>
            </select>
        </div>
        <div class=""form-group"">
            <label>Area field</label>
            <textarea class=""form-control"" id=""Body_Opmerking"" name=""Body.Opmerking"" placeholder=""Shizzle"" rows=""5""></textarea>
        </div>
        <div class=""form-group"">
            <label>Date field</label>
            <div class=""input-group date"">
                <input placeholder="""" value=""8/09/2016"" class");
            WriteLiteral(@"=""form-control"" id=""Body_0__GeldigVan"" name=""Body.Documenten[0].GeldigVan"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-calendar""></i></span>
            </div>
        </div>
        <div class=""form-group"">
            <label>Time field</label>
            <div class=""input-group bootstrap-timepicker"">
                <input value=""08:00:00"" class=""form-control"" id=""Body_BeginUur"" name=""Body.BeginUur"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-clock-o""></i></span>
            </div>
        </div>
        <div class=""form-group"">
            <label>Search field</label>
            <div class=""input-group"">
                <input class=""form-control"" id=""OndernemingsNrTextBox"" name=""Body.Ondernemingsnr"" type=""text"" value=""0845.571.566"">
                <span class=""input-group-btn"">
                    <button class=""btn btn-primary"" id=""SearchKlantByOndernemingsnrButton"" type=""button""><i class=""fa fa-search""></i></button>
   ");
            WriteLiteral(@"             </span>
            </div>
        </div>
        <div class=""form-group"">
            <label>Slider field</label>
            <div class=""input-group"">
                <span class=""text-right"">
                    <label class=""switch""><input id=""Body_IsBetaaldSwitchCheckbox"" type=""checkbox""><i></i></label>
                    <input data-val=""true"" data-val-required=""IsBetaald is verplicht."" id=""Body_IsBetaald"" name=""Body.IsBetaald"" type=""hidden"" value=""false"">
                </span>
            </div>
        </div>
    </div>
    <div class=""col-md-3"">
        <div class=""form-group has-error has-feedback"">
            <label>Text field</label>
            <input class=""form-control"" id=""Body_Firmanaam"" name=""Body.Firmanaam"" type=""text"" value="""">
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""Body_FirmanaamStatus"" class=""sr-only"">(warning)</span>
            <div class=""help-block"">A block of help");
            WriteLiteral(@" text that breaks onto a new line and may extend beyond one line.</div>
        </div>
        <div class=""form-group has-error has-feedback"">
            <label>Email field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon1"">");
            EndContext();
            BeginContext(4954, 5039, true);
            WriteLiteral(@"@</span>
                <input type=""email"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon1"">
            </div>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""inputWarning2Status"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group has-error has-feedback"">
            <label>Phone field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon2""><i class=""fa fa-phone"" aria-hidden=""true""></i></span>
                <input type=""tel"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon2"">
            </div>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""inputWarning2Status"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group  has-error"">
            <label>Number field</label>
            <");
            WriteLiteral(@"div class=""input-group"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""down"">
                        <i class=""fa fa-minus""></i>
                    </button>
                </span>
                <input type=""text"" class=""form-control"" aria-label=""Amount (to the nearest dollar)"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""up"">
                        <i class=""fa fa-plus""></i>
                    </button>
                </span>
            </div>
        </div>
        <div class=""form-group has-error"">
            <label>Select field</label>
            <select class=""form-control"" id=""Body_JuridischeEntiteitId"" name=""Body.JuridischeEntiteitId"">
                <option value="""">--</option>
                <option value=""1"">Test1</option>
                <option value=""2"">Test2</option>
            </select>
        ");
            WriteLiteral(@"</div>
        <div class=""form-group has-error has-feedback"">
            <label>Area field</label>
            <textarea class=""form-control"" id=""Body_Opmerking"" name=""Body.Opmerking"" placeholder=""Shizzle"" rows=""5""></textarea>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""Body_FirmanaamStatus"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group has-error"">
            <label>Date field</label>
            <div class=""input-group date"">
                <input placeholder="""" value=""8/09/2016"" class=""form-control"" id=""Body_0__GeldigVan"" name=""Body.Documenten[0].GeldigVan"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-calendar""></i></span>
            </div>
        </div>
        <div class=""form-group has-error"">
            <label>Time field</label>
            <div class=""input-group bootstrap-timepicker"">
                <input value=""08:00:00"" class=""form");
            WriteLiteral(@"-control"" id=""Body_BeginUur"" name=""Body.BeginUur"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-clock-o""></i></span>
            </div>
        </div>
        <div class=""form-group has-error"">
            <label>Search field</label>
            <div class=""input-group"">
                <input class=""form-control"" id=""OndernemingsNrTextBox"" name=""Body.Ondernemingsnr"" type=""text"" value=""0845.571.566"">
                <span class=""input-group-btn"">
                    <button class=""btn btn-primary"" id=""SearchKlantByOndernemingsnrButton"" type=""button""><i class=""fa fa-search""></i></button>
                </span>
            </div>
        </div>
        <div class=""form-group has-error"">
            <label>Slider field</label>
            <div class=""input-group"">
                <span class=""text-right"">
                    <label class=""switch""><input id=""Body_IsBetaaldSwitchCheckbox"" type=""checkbox""><i></i></label>
                    <input data-val=""true"" da");
            WriteLiteral(@"ta-val-required=""IsBetaald is verplicht."" id=""Body_IsBetaald"" name=""Body.IsBetaald"" type=""hidden"" value=""false"">
                </span>
            </div>
        </div>
    </div>
    <div class=""col-md-3"">
        <div class=""form-group has-warning has-feedback"">
            <label>Text field</label>
            <input class=""form-control"" id=""Body_Firmanaam"" name=""Body.Firmanaam"" type=""text"" value="""">
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""Body_FirmanaamStatus"" class=""sr-only"">(warning)</span>
            <div class=""help-block"">A block of help text that breaks onto a new line and may extend beyond one line.</div>
        </div>
        <div class=""form-group has-warning has-feedback"">
            <label>Email field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon1"">");
            EndContext();
            BeginContext(9994, 5055, true);
            WriteLiteral(@"@</span>
                <input type=""email"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon1"">
            </div>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""inputWarning2Status"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group has-warning has-feedback"">
            <label>Phone field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon2""><i class=""fa fa-phone"" aria-hidden=""true""></i></span>
                <input type=""tel"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon2"">
            </div>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""inputWarning2Status"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group  has-warning"">
            <label>Number field</label>
         ");
            WriteLiteral(@"   <div class=""input-group"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""down"">
                        <i class=""fa fa-minus""></i>
                    </button>
                </span>
                <input type=""text"" class=""form-control"" aria-label=""Amount (to the nearest dollar)"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""up"">
                        <i class=""fa fa-plus""></i>
                    </button>
                </span>
            </div>
        </div>
        <div class=""form-group has-warning"">
            <label>Select field</label>
            <select class=""form-control"" id=""Body_JuridischeEntiteitId"" name=""Body.JuridischeEntiteitId"">
                <option value="""">--</option>
                <option value=""1"">Test1</option>
                <option value=""2"">Test2</option>
            </select>
  ");
            WriteLiteral(@"      </div>
        <div class=""form-group has-warning has-feedback"">
            <label>Area field</label>
            <textarea class=""form-control"" id=""Body_Opmerking"" name=""Body.Opmerking"" placeholder=""Shizzle"" rows=""5""></textarea>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""Body_FirmanaamStatus"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group has-warning"">
            <label>Date field</label>
            <div class=""input-group date"">
                <input placeholder="""" value=""8/09/2016"" class=""form-control"" id=""Body_0__GeldigVan"" name=""Body.Documenten[0].GeldigVan"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-calendar""></i></span>
            </div>
        </div>
        <div class=""form-group has-warning"">
            <label>Time field</label>
            <div class=""input-group bootstrap-timepicker"">
                <input value=""08:00:00""");
            WriteLiteral(@" class=""form-control"" id=""Body_BeginUur"" name=""Body.BeginUur"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-clock-o""></i></span>
            </div>
        </div>
        <div class=""form-group has-warning"">
            <label>Search field</label>
            <div class=""input-group"">
                <input class=""form-control"" id=""OndernemingsNrTextBox"" name=""Body.Ondernemingsnr"" type=""text"" value=""0845.571.566"">
                <span class=""input-group-btn"">
                    <button class=""btn btn-primary"" id=""SearchKlantByOndernemingsnrButton"" type=""button""><i class=""fa fa-search""></i></button>
                </span>
            </div>
        </div>
        <div class=""form-group has-warning"">
            <label>Slider field</label>
            <div class=""input-group"">
                <span class=""text-right"">
                    <label class=""switch""><input id=""Body_IsBetaaldSwitchCheckbox"" type=""checkbox""><i></i></label>
                    <input da");
            WriteLiteral(@"ta-val=""true"" data-val-required=""IsBetaald is verplicht."" id=""Body_IsBetaald"" name=""Body.IsBetaald"" type=""hidden"" value=""false"">
                </span>
            </div>
        </div>
    </div>
    <div class=""col-md-3"">
        <div class=""form-group has-success has-feedback"">
            <label>Text field</label>
            <input class=""form-control"" id=""Body_Firmanaam"" name=""Body.Firmanaam"" type=""text"" value="""">
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""Body_FirmanaamStatus"" class=""sr-only"">(warning)</span>
            <div class=""help-block"">A block of help text that breaks onto a new line and may extend beyond one line.</div>
        </div>
        <div class=""form-group has-success has-feedback"">
            <label>Email field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon1"">");
            EndContext();
            BeginContext(15050, 4305, true);
            WriteLiteral(@"@</span>
                <input type=""email"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon1"">
            </div>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""inputWarning2Status"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group has-success has-feedback"">
            <label>Phone field</label>
            <div class=""input-group"">
                <span class=""input-group-addon"" id=""basic-addon2""><i class=""fa fa-phone"" aria-hidden=""true""></i></span>
                <input type=""tel"" class=""form-control"" placeholder=""Username"" aria-describedby=""basic-addon2"">
            </div>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""inputWarning2Status"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group  has-success"">
            <label>Number field</label>
         ");
            WriteLiteral(@"   <div class=""input-group"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""down"">
                        <i class=""fa fa-minus""></i>
                    </button>
                </span>
                <input type=""text"" class=""form-control"" aria-label=""Amount (to the nearest dollar)"">
                <span class=""input-group-btn"">
                    <button type=""button"" class=""btn btn-primary"" data-direction=""up"">
                        <i class=""fa fa-plus""></i>
                    </button>
                </span>
            </div>
        </div>
        <div class=""form-group has-success"">
            <label>Select field</label>
            <select class=""form-control"" id=""Body_JuridischeEntiteitId"" name=""Body.JuridischeEntiteitId"">
                <option value="""">--</option>
                <option value=""1"">Test1</option>
                <option value=""2"">Test2</option>
            </select>
  ");
            WriteLiteral(@"      </div>
        <div class=""form-group has-success has-feedback"">
            <label>Area field</label>
            <textarea class=""form-control"" id=""Body_Opmerking"" name=""Body.Opmerking"" placeholder=""Shizzle"" rows=""5""></textarea>
            <span class=""glyphicon glyphicon-remove form-control-feedback"" aria-hidden=""true""></span>
            <span id=""Body_FirmanaamStatus"" class=""sr-only"">(warning)</span>
        </div>
        <div class=""form-group has-success"">
            <label>Date field</label>
            <div class=""input-group date"">
                <input placeholder="""" value=""8/09/2016"" class=""form-control"" id=""Body_0__GeldigVan"" name=""Body.Documenten[0].GeldigVan"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-calendar""></i></span>
            </div>
        </div>
        <div class=""form-group has-success"">
            <label>Time field</label>
            <div class=""input-group bootstrap-timepicker"">
                <input value=""08:00:00""");
            WriteLiteral(@" class=""form-control"" id=""Body_BeginUur"" name=""Body.BeginUur"" type=""text"">
                <span class=""input-group-addon""><i class=""fa fa-clock-o""></i></span>
            </div>
        </div>
        <div class=""form-group has-success"">
            <label>Search field</label>
            <div class=""input-group"">
                <input class=""form-control"" id=""OndernemingsNrTextBox"" name=""Body.Ondernemingsnr"" type=""text"" value=""0845.571.566"">
                <span class=""input-group-btn"">
                    <button class=""btn btn-primary"" id=""SearchKlantByOndernemingsnrButton"" type=""button""><i class=""fa fa-search""></i></button>
                </span>
            </div>
        </div>
        <div class=""form-group has-success"">
            <label>Slider field</label>
            <div class=""input-group"">
                <span class=""text-right"">
                    <label class=""switch""><input id=""Body_IsBetaaldSwitchCheckbox"" type=""checkbox""><i></i></label>
                    <input da");
            WriteLiteral("ta-val=\"true\" data-val-required=\"IsBetaald is verplicht.\" id=\"Body_IsBetaald\" name=\"Body.IsBetaald\" type=\"hidden\" value=\"false\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
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