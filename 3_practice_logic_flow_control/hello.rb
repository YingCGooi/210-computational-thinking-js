range = (1..9).to_a
p range

def iterate(range)
  idx = 0

  loop do
    yield range[idx] if block_given?
    idx += 1
    break if idx >= range.size
  end
end

iterate(range) { |digit| p digit }