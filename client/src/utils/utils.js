const calculateTimeLeft = (hackDate) => {
  const diff = +new Date(hackDate) - +new Date();
  let timeLeft = {};
  if (diff > 0) {
    timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }
  return timeLeft;
};

const ISOtoDateTimeLocal = (date) => {
  const res = new Date(date)
    .toLocaleString("sv-SE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(" ", "T");

  return res;
};

module.exports = { calculateTimeLeft, ISOtoDateTimeLocal };
