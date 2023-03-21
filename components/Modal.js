import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Modal({ data, onClose }) {
  useEffect(() => {
    console.log(data[0])
  }, [data[0]]);

  switch (data[1]) {
    case "artist":
        return (
            <div className={styles.modalDark}>
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalTitleImg}>
                        <img src={data[0].data.images[0].uri === undefined ? '/placeholder.png' : data[0].data.images[0].uri} alt=""/>
                        <div className={styles.modalTitle}>
                            <h1>{data[0].data.name === undefined ? "Undocumented" : data[0].data.name}</h1>
                            {data[0].data.members === undefined ? "" : <ul>Members: { data[0].data.members.map((item, i) => {
                                return <li key={i}>{item.name}</li> })}</ul>}
                        </div>
                    </div>
                    <p className={styles.modalDesc}>{data[0].data.profile === undefined ? "Undocumented" : data[0].data.profile}</p>
                </div>
                <button className={styles.modalButton} onClick={onClose}>Close</button>
              </div>
            </div>
          );
    case "master":
        return (
            <div className={styles.modalDark}>
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalTitleImg}>
                        <img src={data[0].data.images[0].uri === undefined ? '/placeholder.png' : data[0].data.images[0].uri} alt=""/>
                        <div className={styles.modalTitle}>
                            <h1>{data[0].data.title === undefined ? "Undocumented" : data[0].data.title}</h1>
                            <p>Artist: {data[0].data.artists[0].name === undefined ? "Undocumented" : data[0].data.artists[0].name}</p>
                            <p>Year: {data[0].data.year === undefined ? "Undocumented" : data[0].data.year} </p>
                            {data[0].data.genres[1] === undefined ? <p>Genre: {data[0].data.genres[0]}</p> : <ul>Genres: { data[0].data.genres.map((item, i) => {
                            return <li key={i}>{item}, </li> })}</ul>}
                        </div>
                    </div>
                    <p>{data[0].data.notes === undefined ? "Undocumented" : data[0].data.notes}</p>
                    {data[0].data.tracklist === undefined ? "" : <ul>Tracklist: { data[0].data.tracklist.map((item, i) => {
                            return <li key={i}>- {item.title}</li> })}</ul>}
                </div>
                <button className={styles.modalButton} onClick={onClose}>Close</button>
              </div>
            </div>
          );
    case "release":
        return (
            <div className={styles.modalDark}>
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalTitleImg}>
                        <img src={data[0].data.images[0].uri === undefined ? '/placeholder.png' : data[0].data.images[0].uri} alt=""/>
                        <div className={styles.modalTitle}>
                            <h1>{data[0].data.title === undefined ? "Undocumented" : data[0].data.title}</h1>
                            <p>Artist: {data[0].data.artists[0].name === undefined ? "Undocumented" : data[0].data.artists[0].name}</p>
                            <p>Year: {data[0].data.year === undefined ? "Undocumented" : data[0].data.year} </p>
                            {data[0].data.genres[1] === undefined ? <p>Genre: {data[0].data.genres[0]}</p> : <ul>Genres: { data[0].data.genres.map((item, i) => {
                            return <li key={i}>{item}, </li> })}</ul>}
                        </div>
                    </div>
                    <p>{data[0].data.notes === undefined ? "Undocumented" : data[0].data.notes}</p>
                    {data[0].data.tracklist === undefined ? "" : <ul>Tracklist: { data[0].data.tracklist.map((item, i) => {
                            return <li key={i}>- {item.title}</li> })}</ul>}
                </div>
                <button className={styles.modalButton} onClick={onClose}>Close</button>
              </div>
            </div>
          );
    case "label":
        return (
            <div className={styles.modalDark}>
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalTitleImg}>
                        <img src={data[0].data.images[0].uri === undefined ? '/placeholder.png' : data[0].data.images[0].uri} alt=""/>
                        <div className={styles.modalTitle}>
                            <h1>{data[0].data.name === undefined ? "Undocumented" : data[0].data.name}</h1>
                            <p>Contact info: {data[0].data.contact_info === undefined ? "Undocumented" : data[0].data.contact_info} </p>
                            {data[0].data.sublabels[1] === undefined ? <p>Sublabels: {data[0].data.sublabels[0]}</p> : <ul>Genres: { data[0].data.sublabels.map((item, i) => {
                            return <li key={i}>{item.name}, </li> })}</ul>}
                        </div>
                    </div>
                    <p>{data[0].data.profile === undefined ? "Undocumented" : data[0].data.profile}</p>
                    {/* {data[0].data.tracklist === undefined ? "" : <ul>Tracklist: { data[0].data.tracklist.map((item, i) => {
                            return <li key={i}>- {item.title}</li> })}</ul>} */}
                </div>
                <button className={styles.modalButton} onClick={onClose}>Close</button>
              </div>
            </div>
          );
    default:
        return (
            <div className={styles.modalDark}>
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <h1>NO DATA</h1>
                </div>
                <button className={styles.modalButton} onClick={onClose}>Close</button>
              </div>
            </div>
          );
  }

//   return (
//     <div className={styles.modalDark}>
//       <div className={styles.modal}>
//         <div className={styles.modalTitleImg}>
//             <img src={data[0].data.images[0].uri} alt=""/>
//             <div className={styles.modalTitle}>
//                 <h1>name: {data[0].data.name}</h1>
//                 <ul>members: { data[0].data.members.map((item, i) => {
//                     return <li key={i}>{item.name}</li> })}</ul>
//             </div>
//         </div>
//         <p className={styles.modalDesc}>description: {data[0].data.profile}</p>
//         <button onClick={onClose}>close</button>
//       </div>
//     </div>
//   );
}
