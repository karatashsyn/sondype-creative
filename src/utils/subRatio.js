export default function subRatio(sectionRatio, start, end, calculateOverFlow) {
  if (sectionRatio <= start) {
    return 0
  }
  if (sectionRatio >= end && !calculateOverFlow) {
    return 100
  }
  return (((sectionRatio - start) / (end - start)) * 100).toFixed(0)
}
