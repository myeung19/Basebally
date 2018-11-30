package api;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import utils.ApiDataExtractor;
import utils.HttpHelper;

import java.io.IOException;
import java.util.LinkedList;
import java.util.Map;

@CrossOrigin(maxAge = 3600)
@RestController
public class ApiController
{
    @RequestMapping("/")
    public String homePage()
    {
        return "{ \"status\": \"200\" }";
    }

    @RequestMapping("/game")
    public String getGame()
    {
        return "{ \"status\": \"200\" }";
    }

    @RequestMapping(path = "/team_standings", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getStandings() throws IOException
    {
        String response = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/division_team_standings.json");
        Map<String, LinkedList<String>> standings = ApiDataExtractor.getStandingFromApi(response);

        return new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(standings);
    }

    @GetMapping(path = "/playerStats", params = "player", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getPlayerStats(@RequestParam("player") String player) throws IOException
    {
//        String profileData = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/active_players.json?player=shohei-ohtani");
//        String statsData = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/cumulative_player_stats.json?player=shohei-ohtani");
        String profileData = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/active_players.json?player=" + player);
        String statsData = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/cumulative_player_stats.json?player=" + player);

        Map<String, JsonNode> stats = ApiDataExtractor.getPlayerStats(profileData, statsData);
        if (stats == null)
            return "{ \"error\" : \"Player not found\" }";

        return new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(stats);
    }
}
