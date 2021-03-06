package utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

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

    public static Map<String, JsonNode> getPlayerStats(String profileData, String statsData) throws IOException
    {
        Map<String, JsonNode> overallStats = new HashMap<>();

        JsonNode profile = getPlayerProfileFromApi(profileData);
        if (profile == null) return null;

        System.out.println(profile.get("bio").get("Position"));
        JsonNode stats = getPlayerStatsFromApi(statsData, profile.get("bio").get("Position").textValue());

        overallStats.put("playerProfile", profile);
        overallStats.put("playerStats", stats);

        return overallStats;
    }

    private static JsonNode getPlayerProfileFromApi(String data) throws IOException
    {
        Map<String, JsonNode> profile = new HashMap<>();

        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(data);
        if (rootNode.get("activeplayers").get("playerentry") == null) return null;

        List<String> removedField = Arrays.asList("HighSchool", "College", "Twitter", "RosterStatus", "handedness", "draft", "currentContractYear", "externalMapping");

        JsonNode playerTeamInfoNode = rootNode.path("activeplayers").path("playerentry").path(0).get("team");
        JsonNode playerInfoNode = rootNode.path("activeplayers").path("playerentry").path(0).get("player");
        removedField.forEach(((ObjectNode) playerInfoNode)::remove);
        ((ObjectNode) playerInfoNode).put("team", playerTeamInfoNode);

        profile.put("bio", playerInfoNode);
//        ((ObjectNode) profileNode).put("team", playerTeamInfoNode);

        System.out.println(playerInfoNode.toString());

        return mapper.valueToTree(profile);
    }

    private static JsonNode getPlayerStatsFromApi(String data, String position) throws IOException
    {
        Map<String, JsonNode> stats = new HashMap<>();

        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(data).get("cumulativeplayerstats").get("playerstatsentry").get(0).get("stats");

        if (position.equals("P"))
        {
            //G, W-L, ERA, IP, SO, WHIP
            JsonNode G = rootNode.get("GamesPlayed");
            JsonNode W = rootNode.get("Wins");
            JsonNode L = rootNode.get("Losses");
            JsonNode ERA = rootNode.get("EarnedRunAvg");
            JsonNode IP = rootNode.get("InningsPitched");
            JsonNode SO = rootNode.get("BatterStrikeouts");
            JsonNode WHIP = rootNode.get("WalksAndHitsPerInningPitched");

            stats.put("GamesPlayed", G);
            stats.put("Wins", W);
            stats.put("Losses", L);
            stats.put("EarnedRunAvg", ERA);
            stats.put("InningsPitched", IP);
            stats.put("BatterStrikeouts", SO);
            stats.put("WalksAndHitsPerInningPitched", WHIP);
        }
        else
        {
            //AB, AVG, HR, RBI, SB, OPS
            JsonNode AB = rootNode.get("AtBats");
            JsonNode AVG = rootNode.get("BattingAvg");
            JsonNode HR = rootNode.get("Homeruns");
            JsonNode RBI = rootNode.get("RunsBattedIn");
            JsonNode SB = rootNode.get("StolenBases");
            JsonNode OPS = rootNode.get("BatterOnBasePlusSluggingPct");

            stats.put("AtBats", AB);
            stats.put("BattingAvg", AVG);
            stats.put("Homeruns", HR);
            stats.put("RunsBattedIn", RBI);
            stats.put("StolenBases", SB);
            stats.put("BatterOnBasePlusSluggingPct", OPS);
        }

        return mapper.valueToTree(stats);
    }
}
