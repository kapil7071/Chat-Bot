package com.ollama.SpringOllama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringOllamaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringOllamaApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override 
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
					.allowedMethods("*") // Allow all HTTP methods
					.allowedOrigins("http://localhost:5173") // Only allow requests from this origin
					.allowedHeaders("*")
					.allowCredentials(true); // Allow credentials (optional)
			}
		};
	}
}
