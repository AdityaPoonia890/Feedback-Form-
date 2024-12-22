package com.aditya.feedbackbackend.repository;

import com.aditya.feedbackbackend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{};