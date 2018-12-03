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
import java.util.Random;

@CrossOrigin(maxAge = 3600)
@RestController
public class ApiController
{
    @GetMapping("/")
    public String homePage()
    {
        return "{ \"status\": \"200\" }";
    }

    @GetMapping(path = "/game", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getGame() throws IOException
    {
        String[] games = {"[{\"Inning\": \"Final\", \"homeTeam\": \"DET\", \"homeScore\": 5, \"awayTeam\": \"NYY\", \"awayScore\": 10}, {\"Inning\": \"1st\", \"homeTeam\": \"SF\", \"homeScore\": 15, \"awayTeam\": \"SD\", \"awayScore\": 1}]",
                "[{\"Inning\": \"Final\", \"homeTeam\": \"LAA\", \"homeScore\": 6, \"awayTeam\": \"LAD\", \"awayScore\": 10}, {\"Inning\": \"7th\", \"homeTeam\": \"BOS\", \"homeScore\": 10, \"awayTeam\": \"NYY\", \"awayScore\": 1}]"};

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(games[new Random().nextInt(2)]);

        return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonNode);
    }

    @GetMapping(path = "/standings", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getStandings() throws IOException
    {
        String response = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/division_team_standings.json");
        Map<String, LinkedList<String>> standings = ApiDataExtractor.getStandingFromApi(response);

        return new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(standings);
    }

    @GetMapping(path = "/playerStats", params = "player", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String getPlayerStats(@RequestParam("player") String player) throws IOException
    {
        String profileData = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/active_players.json?player=" + player);
        String statsData = HttpHelper.fetchDataFromAPI("https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/cumulative_player_stats.json?player=" + player);

        Map<String, JsonNode> stats = ApiDataExtractor.getPlayerStats(profileData, statsData);
        if (stats == null)
            return "{ \"error\" : \"Player not found\" }";

        return new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(stats);
    }
}
