using System.Text.Json.Serialization;

namespace MarktenEnForenWeb.Shared
{
    public class JwtTokenResponse
    {
        [JsonPropertyName("jwtToken")]
        public string JwtToken { get; set; }
    }
}
