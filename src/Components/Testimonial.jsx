import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Prince Sharma"}
          feedback={"Your ability to concentrate and maintain focus is exemplary."}
        />

        <TestimonialCard
          name={"Anshu Sharma"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"Rachit Sharma"}
          feedback={"You have done a amazing work bro on this project."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
