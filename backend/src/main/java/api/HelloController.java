package api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import utils.ApiDataExtractor;
import utils.HttpHelper;

import java.io.IOException;
import java.util.LinkedList;
import java.util.Map;

@RestController
public class HelloController
{
    @RequestMapping("/")
    public String homePage()
    {
        return "{ \"status\": \"200\" }";
    }

    @RequestMapping("/game")
    public String api()
    {
        return "No live data";
    }

    @RequestMapping(path = "/team_standings", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getStandings() throws IOException
    {
        String response = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/division_team_standings.json");
        Map<String, LinkedList<String>> standings = ApiDataExtractor.getStandingFromApi(response);

        return new ObjectMapper().writeValueAsString(standings);
    }
}
