using Microsoft.AspNetCore.Authentication.OAuth.Claims;
using Newtonsoft.Json.Linq;
using System.Security.Claims;
using System.Text.Json;

namespace MarktenEnForenWeb.Shared
{
    public class DigipolisPermissionClaimAction : ClaimAction
    {
        public DigipolisPermissionClaimAction(string claimType, string valueType) : base(claimType, valueType)
        {
        }

        public override void Run(JsonElement userData, ClaimsIdentity identity, string issuer)
        {
            var data = (dynamic)userData;
            var perms = data.permissions as JArray;
            if (perms == null) return;

            foreach (var permission in perms)
            {
                identity.AddClaim(new Claim(ClaimType, (string)permission));
            }
        }
    }
}
