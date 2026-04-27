
interface Testimonial {
    id: number;
    name: string;
    designation: string;
    text: string;
    image: string;
}

const testimonial_data: Testimonial[] = [
    {
        id: 1,
        name: "Zonathon Doe",
        designation: "CEO & Founder X",
        text: "Bilal helped us completely transform our digital presence. His eye for detail and focus on user experience resulted in a 40% increase in conversions.",
        image: "/assets/images/testimonials/author1.jpg"
    },
    {
        id: 2,
        name: "Martin Smith",
        designation: "CEO & Founder Google",
        text: "The automation workflows Bilal built saved our team over 20 hours a week. A truly professional-grade creative lead.",
        image: "/assets/images/testimonials/author2.jpg"
    },
    {
        id: 3,
        name: "Methail Dev",
        designation: "Managing Director - Paydesk",
        text: "Exceptional design skills and a deep understanding of marketing. Bilal is a rare find who bridges the gap between art and technology.",
        image: "/assets/images/testimonials/author3.jpg"
    }
];

export default testimonial_data;
