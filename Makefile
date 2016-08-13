all: gulp

gulp-imagemin: $(shell find img -type f)
  gulp imagemin

gulp-less: $(shell find less -type f)
  gulp less

gulp: gulp-imagemin gulp-less

clean:
  rm -rf static

.PHONY: all gulp-imagemin gulp-less gulp clean
