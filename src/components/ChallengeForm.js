import React from "react";
import "../assets/styles/ChallengeForm.css";

function ChallengeForm() {
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
              <form>
                <div>
                  <label>Challenge Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div>
                  <label>Start Date</label>
                  <input className="form-control" type="date" />
                </div>
                <div>
                  <label>End Date</label>
                  <input className="form-control" type="date" />
                </div>
                <div>
                  <label>Description</label>
                  <textarea className="form-control" rows={5}></textarea>
                </div>
                <div>
                  <label>Level Type</label>
                  <select className="form-control-2">
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
