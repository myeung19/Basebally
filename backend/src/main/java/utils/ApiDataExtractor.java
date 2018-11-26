package utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.*;

public class ApiDataExtractor
{
    public static Map<String, LinkedList<String>> getStandingFromApi(String data) throws IOException
    {

        Map<String, LinkedList<String>> standings = new LinkedHashMap<>();

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(data);

        JsonNode divisions = jsonNode.get("divisionteamstandings").get("division");
        Iterator<JsonNode> divsionsArray = divisions.iterator();
        while (divsionsArray.hasNext())
        {
            List<String> rankings = new LinkedList<>();

            JsonNode division = divsionsArray.next();

            String divisionTitle = division.get("@name").asText();

            JsonNode teams = division.get("teamentry");
            Iterator<JsonNode> teamsArray = teams.iterator();

            standings.put(divisionTitle, new LinkedList<>());

            while (teamsArray.hasNext())
            {
                JsonNode element = teamsArray.next();

                String teamName = element.get("team").get("Abbreviation").asText();

                JsonNode stats = element.get("stats");
                String wins = stats.get("Wins").get("#text").asText();
                String losses = stats.get("Losses").get("#text").asText();
                String winPer = stats.get("WinPct").get("#text").asText();

                String teamInfo = teamName + " - " + wins + " - " + losses + " - " + winPer;

                standings.get(divisionTitle).add(teamInfo);
            }
        }

        standings.forEach((k, v) -> System.out.println(k + " " + v));

        return standings;
    }
}
