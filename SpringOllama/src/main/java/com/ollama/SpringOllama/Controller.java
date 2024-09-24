package com.ollama.SpringOllama;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
@RestController
@RequestMapping("/ai")
public class Controller {
    @Autowired
    private OllamaChatModel chat;

    @GetMapping("/prompt")
    public Flux<String> get(@RequestParam("prompt") String prompt) {
        return chat.stream(prompt);
    }

//    @PostMapping("/chat")
//    public Flux<String> chat(@RequestParam("prompt") String prompt) {
//        return chat.stream(prompt);
//    }
}
