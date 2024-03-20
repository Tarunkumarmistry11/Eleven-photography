import React from "react";
import './videography.css';

const videosData = [
    {
        title: "The mountains are calling and i must go",
        videoId: "F9uAhHSZeIM",
    },
    {
        title: "Ruined house cinematic 4k",
        videoId: "hrkmmumbXn8",
    },
    {
        title: "Into the woods",
        videoId: "AYuU8VgWOFY",
    },
    {
        title: "College campus cinematic B-roll",
        videoId: "s0s8tMeHSbs",
    },
    {
        title: "Trek to South Kailash",
        videoId: "it9YiEV0ELA",
    },
];

const Videos = () => {
    return (
        <div>
            {videosData.map((video, index) => (
                <div key={index} className="video-container">
                    <h2>{video.title}</h2>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={`YouTube video player ${index}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
            <div className="footer">
            <p className="copyright">© 2024, EL3V3N</p>
            </div>
        </div>
    );
};

export default Videos;
