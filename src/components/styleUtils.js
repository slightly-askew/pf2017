//@flow

export function baseAdjust(n: number) {
  return (
    `
      padding-top: calc(${n}em / 16) !important;
      margin-bottom: calc(-${n}em / 16) !important;
    `
  )
}
