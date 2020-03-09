const TruncateText = item => {
  if (item) {
    let truncateTitle = item.substring(0, 200) + " ...";

    return truncateTitle;
  }
};

export default TruncateText;
