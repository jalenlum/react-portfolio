import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import { storage } from '../firebase-config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const Resume = () => {
  const [resumeUrls, setResumeUrls] = useState([]);

  const resumeRef = ref(storage, 'resume/');

  useEffect(() => {
    listAll(resumeRef).then((response) => {
      Promise.all(
        response.items.map((item) => getDownloadURL(item))
      ).then((urls) => {
        setResumeUrls(urls);
      });
    });
  }, []);

  return (
    <div className="container" id="resume">
      <div className="row mt-5 justify-content-center">
        <div className="col text-center">
          <h1>Resume</h1>
        </div>
      </div>
      <div className="row mt-2 justify-content-center">
        <div className="col">
          <div className="ratio ratio-4x3 my-3">
            <iframe
              title="my-resume"
              className="embed-responsive-item"
              src={resumeUrls[0]}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

