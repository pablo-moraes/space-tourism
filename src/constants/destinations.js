import Moon from '/src/assets/images/destinations/image-moon.webp'
import Mars from '/src/assets/images/destinations/image-mars.webp'
import Europa from '/src/assets/images/destinations/image-europa.webp'
import Titan from '/src/assets/images/destinations/image-titan.webp'

const destinations = [
    {
        name: 'moon',
        travel_time: '3 days',
        avg_distance: '384,400 km',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        photo: Moon
    },
    {
        name: 'mars',
        travel_time: '9 months',
        avg_distance: '225 mil. km',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        photo: Mars
    },
    {
        name: 'europa',
        travel_time: '3 years',
        avg_distance: '628 mil. km',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        photo: Europa
    },
    {
        name: 'titan',
        travel_time: '7 years',
        avg_distance: '1.6 bil. km',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        photo: Titan
    },
];

export default destinations;