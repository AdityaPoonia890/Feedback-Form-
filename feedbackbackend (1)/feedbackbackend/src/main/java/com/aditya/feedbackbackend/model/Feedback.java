package com.aditya.feedbackbackend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

@Entity
@Component
@Getter@Setter@ToString@AllArgsConstructor@NoArgsConstructor
public class Feedback {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Version
    private Long version;
    private Integer services;
    private Integer ui;
    private Integer prices;
    private Integer product;
}


