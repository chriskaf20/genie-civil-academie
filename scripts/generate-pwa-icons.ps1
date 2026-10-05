# Generates the PWA icons in public/icons from the logo master (assets/brand/gcea-logo-1024.jpg).
# Windows PowerShell 5.1+, no npm dependency:  powershell -ExecutionPolicy Bypass -File scripts/generate-pwa-icons.ps1
#
#   icon-<n>x<n>.png         round logo on a transparent background ("any" icons)
#   icon-maskable-<n>.png    logo inside the 80 % safe zone on a full navy square ("maskable")
#   apple-touch-icon.png     180 px, full navy square (iOS does not support transparency)
#   favicon-32.png           browser tab icon

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $root 'assets\brand\gcea-logo-1024.jpg'
$outDir = Join-Path $root 'public\icons'
$source = [System.Drawing.Bitmap]::FromFile($sourcePath)

# Bounding box of the dark disc: first dark pixel from each edge along the centre lines.
function Test-Dark($c) { return ($c.R + $c.G + $c.B) -lt 360 }
$mid = [int]($source.Width / 2)
$left = 0;  while (-not (Test-Dark $source.GetPixel($left, $mid))) { $left++ }
$right = $source.Width - 1;  while (-not (Test-Dark $source.GetPixel($right, $mid))) { $right-- }
$top = 0;  while (-not (Test-Dark $source.GetPixel($mid, $top))) { $top++ }
$bottom = $source.Height - 1;  while (-not (Test-Dark $source.GetPixel($mid, $bottom))) { $bottom-- }
$disc = New-Object System.Drawing.RectangleF($left, $top, ($right - $left + 1), ($bottom - $top + 1))
$navy = $source.GetPixel($mid, [int]($top + ($bottom - $top) * 0.88))
Write-Output ("Disc: x={0} y={1} w={2} h={3}; background {4}" -f $disc.X, $disc.Y, $disc.Width, $disc.Height, $navy)

function New-Icon([int]$size, [double]$scale, [bool]$fill, [string]$name) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear([System.Drawing.Color]::Transparent)
  if ($fill) { $g.Clear($navy) }

  $d = $size * $scale
  $offset = ($size - $d) / 2
  $dest = New-Object System.Drawing.RectangleF($offset, $offset, $d, $d)
  $clip = New-Object System.Drawing.Drawing2D.GraphicsPath
  $clip.AddEllipse($dest)
  $g.SetClip($clip)
  $g.DrawImage($source, $dest, $disc, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()

  $path = Join-Path $outDir $name
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output ("  {0} ({1}x{1})" -f $name, $size)
}

foreach ($size in 72, 96, 128, 144, 152, 192, 384, 512) {
  New-Icon $size 1.0 $false ("icon-{0}x{0}.png" -f $size)
}
New-Icon 192 0.8 $true 'icon-maskable-192.png'
New-Icon 512 0.8 $true 'icon-maskable-512.png'
New-Icon 180 0.9 $true 'apple-touch-icon.png'
New-Icon 32 1.0 $false 'favicon-32.png'

$source.Dispose()
