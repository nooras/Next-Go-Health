"use client"

import TestimonialCard from './TestimonialCard'

const testimonialList = [
	{
		photo:
			"/1p.jpg",
		name: "Jane Doe",
		position: "Content Writer",
		from: "UK",
		content:
			'"Joining the online health club has been life-changing. The virtual sessions are very convenient!"',
	},
	{
		photo:
			"3p.jpg",
		name: "Mark Johnson",
		position: "Content Writer",
		from: "UK",
		content:
			'"The online trainers are so supportive and motivating. I’ve never felt better!"',
	},
  {
		photo:
			"/2p.png",
		name: "John Smith",
		position: "Content Writer",
		from: "UK",
		content:
			'"The facilities at the offline club are top-notch. Highly recommend!"',
	},
  {
		photo:
			"/4p.png",
		name: "Emily Clark",
		position: "Content Writer",
		from: "UK",
		content:
			'"I love the group classes at the offline club. They keep me motivated and engaged."',
	},
];


export default function Header() {
  return (
    <div className="container justify-content-center align-items-center text-center" style={{height: '100%'}}>
      <br></br><h1 className=""><b>Hear from Community member</b></h1>
      <div className="row justify-content-center align-items-center text-center">
        {testimonialList.map(({ name, content, position, from, photo }, i) => (
          <TestimonialCard img={photo} name={name} text={content} index={i} />
        ))}
      </div>
    </div>
  );
}
