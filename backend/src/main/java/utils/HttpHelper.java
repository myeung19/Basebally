package utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class HttpHelper
{
    public static String fetchDataFromAPI(String pullUrl) throws IOException
    {
        URL url = new URL (pullUrl);
        String encoding = Base64.getEncoder().encodeToString(("4e49df71-9b23-4c66-804d-d1c26f:capstone1234").getBytes(StandardCharsets.UTF_8));

        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setDoOutput(true);
        connection.setRequestProperty("Authorization", "Basic " + encoding);
        InputStream inputStream = connection.getInputStream();
        BufferedReader in =
                new BufferedReader(new InputStreamReader(inputStream));

        StringBuilder content = new StringBuilder();
        String line;
        while ((line = in.readLine()) != null) {
            content.append(line);
            System.out.println(line);
        }
        return content.toString();
    }
}
