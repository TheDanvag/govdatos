package com.govdatos.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                    .title("API - Gobierno de Datos")
                    .version("1.0")
                    .description("Documentación de los endpoints del sistema de gobierno de datos conforme a la norma ISO/IEC 38500."));
    }
}
