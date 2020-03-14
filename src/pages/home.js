import React from "react";
import Header from "../components/Header/Header";
import NotesList from "../components/db/NotesList";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <NotesList />

      <Footer />
    </div>
  );
}
