import React, { useRef, useState } from "react";
import "../assets/styles/ChallengeForm.css";
import upload from "../assets/icons/bxs_cloud-upload.svg";

function ChallengeForm({ setChallenges, challenges }) {
  const nameRef = useRef("");
  const startRef = useRef("");
  const endRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef("");
  const [img, setImg] = useState(null);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImg(fileUploaded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChallenge = {
      id: Math.random(),
      name: nameRef.current.value,
      start: new Date(startRef.current.value),
      end: new Date(endRef.current.value),
      description: descriptionRef.current.value,
      level: levelRef.current.value,
    };
    setChallenges([...challenges, newChallenge]);
  };
  return (
    <div>
      <div className="challenge-form-container">
        <div className="inner-container">
          <h3>Challenge Details</h3>
        </div>
      </div>
      <div>
        <div>
          <div className="inner-container">
            <div className="challenge-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Challenge Name</label>
                  <input
                    className="form-control"
                    type="text"
                    ref={nameRef}
                    required
                  />
                </div>
                <div>
                  <label>Start Date</label>
                  <input
                    className="form-control"
                    type="date"
                    ref={startRef}
                    required
                  />
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    className="form-control"
                    type="date"
                    ref={endRef}
                    required
                  />
                </div>
                <div>
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    ref={descriptionRef}
                    required
                  ></textarea>
                </div>
                <div>
                  <label>Image</label>
                  <br />
                  <button className="upload-btn" onClick={handleClick}>
                    Upload a file
                    {"       "}
                    <img src={upload} alt="Upload" width={25} />
                  </button>
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                </div>
                <div>
                  <label>Level Type</label>
                  <select className="form-control-2" ref={levelRef} required>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>

                <button type="submit" className="challenge-btn">
                  Create Challenge
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeForm;
