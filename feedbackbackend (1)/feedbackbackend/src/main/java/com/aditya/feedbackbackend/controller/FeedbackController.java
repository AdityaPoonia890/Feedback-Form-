package com.aditya.feedbackbackend.controller;

import com.aditya.feedbackbackend.service.FeedbackImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.aditya.feedbackbackend.model.Feedback;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FeedbackController {

    @Autowired
    FeedbackImpl feedbackService;

    @GetMapping("/Greet")
    public String greet() {
        return "You have made it to my website!";
    }

    @PostMapping("/submit")
    public ResponseEntity<String> store(@ModelAttribute Feedback data) {

        feedbackService.saveData(data);
        return ResponseEntity.ok("Feedback added successfully");
    }
}
