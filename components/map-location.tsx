export function MapLocation() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Our Location</h2>
      <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5784305902447!2d38.79205661478386!3d9.010773793533615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f0f9a06d85%3A0x4331551f2e0d81c9!2sMillennium%20Hall!5e0!3m2!1sen!2set!4v1645488532015!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

