using System.Collections.Generic;

namespace MarktenEnForenWeb.Shared
{
    public class PermissionsResponse
    {
        public string ApplicationId { get; set; }
        public List<string> Permissions { get; set; }
    }
}
