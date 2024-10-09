"use client";

import React, { ChangeEvent, useState } from "react";
import { colleges, programs } from "@/data/profiledata";

export const SelectComponent = () => {
    let [selectedCollege, setSelectedCollege] = useState<any>("");
    const [filteredPrograms, setFilteredPrograms] = useState<any>([]);

    function handleCollegeChange(event: ChangeEvent<HTMLSelectElement>): void {
        const collegeId = parseInt(event.target.value);
        setSelectedCollege(collegeId);

        const filtered = programs.filter(
            (program) => program.collegeId === collegeId
        );

        setFilteredPrograms(filtered);
    }

    return (
        <div>
            <label htmlFor="college">College: </label>
            <select
                name="college"
                id="college"
                value={selectedCollege}
                onChange={handleCollegeChange}
                className="px-2 text-black"
                required
            >
                <option value="">-- Select a College --</option>
                {colleges.map((college) => (
                    <option key={college.id} value={college.id}>
                        {college.name}
                    </option>
                ))}
            </select>
            <br />
            <label htmlFor="program">Select Program: </label>
            <select
                id="program"
                className="px-2 text-black"
                name="program"
                required
            >
                <option value="">-- Select a Program --</option>
                {filteredPrograms.map((program: any) => (
                    <option key={program.id} value={program.name}>
                        {program.name}
                    </option>
                ))}
            </select>
            <br />
        </div>
    );
};
