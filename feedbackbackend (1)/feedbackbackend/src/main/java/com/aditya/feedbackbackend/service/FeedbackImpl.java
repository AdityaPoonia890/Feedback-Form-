package com.aditya.feedbackbackend.service;

import com.aditya.feedbackbackend.model.Feedback;

import com.aditya.feedbackbackend.repository.FeedbackRepo;
import jakarta.persistence.OptimisticLockException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackImpl  {
    @Autowired
    FeedbackRepo feedbackrepo;

    @Transactional
    public void saveData(Feedback data)
    {
        try {
            feedbackrepo.save(data);
        } catch (OptimisticLockException e) {
            throw new RuntimeException(e);
        }
    }
}

