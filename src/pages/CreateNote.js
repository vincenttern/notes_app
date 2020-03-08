import React from "react";
import CreateNoteSection from "../components/db/CreateNoteSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function CreateNote() {
  return (
    <div>
      <Header />
      <CreateNoteSection />
      <Footer />
    </div>
  );
}
