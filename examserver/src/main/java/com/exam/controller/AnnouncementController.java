package com.exam.controller;

import com.exam.model.Announcement;
import com.exam.model.studyMaterial.PdfMaterial;
import com.exam.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/announcement")
@CrossOrigin("*")
public class AnnouncementController {
    @Autowired
    private AnnouncementService announcementService;
    //add-announcement
    @PostMapping("/")
    public ResponseEntity<Announcement> addAnnouncement(@RequestBody Announcement announcement){
        Announcement announcement1=this.announcementService.addAnnouncement(announcement);
        return ResponseEntity.ok(announcement1);
    }
    //get-announcement
   @GetMapping("/")
    public ResponseEntity<?>getAnnouncements(){
        return  ResponseEntity.ok(this.announcementService.getAnnouncements());
    }
    //update-announcement
    @PutMapping("/")
    public ResponseEntity<Announcement>   updateAnnouncement(@RequestBody Announcement announcement){
        return  ResponseEntity.ok(this.announcementService.updateAnnouncement(announcement));
    }
    //delete- category
    @DeleteMapping("/{announcementId}")
    public void deleteAnnouncement(@PathVariable("announcementId") Long announcementId){
        this.announcementService.deleteAnnouncement(announcementId);
    }


}
