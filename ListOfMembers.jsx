import React, { useState } from "react";
import "./members.css";

const ListOfMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const groupMembers = [
    "Yeab",
    "Yubi",
    "Yohannes",
    "Yohanna",
    "Nati",
    "John",
    "Tsiyon",
    "Nebiyat",
    "Yegeta",
    "Nebat",
  ];

  const filteredMembers = groupMembers.filter((member) =>
    member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-of-members">
      <h2>👥 Group 10 Members</h2>

      <input
        type="text"
        placeholder="Search members..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <ul>
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))
        ) : (
          <li>No members found.</li>
        )}
      </ul>
    </div>
  );
};

export default ListOfMembers;
