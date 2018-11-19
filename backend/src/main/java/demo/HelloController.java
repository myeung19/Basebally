package demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController
{
    @RequestMapping("/")
    public String homePage()
    {
        return "<p>Hello World</p>";
    }

    @RequestMapping("/api")
    public String api()
    {
        return "{ \"status\": \"200\" }";
    }
}
