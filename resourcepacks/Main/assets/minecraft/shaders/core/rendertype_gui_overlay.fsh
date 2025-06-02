#version 150
uniform vec4 ColorModulator;
out vec4 fragColor;
in vec4 vertexColor;

const float ALPHA_TARGET = 0.50196;
const vec3 WHITE = vec3(1.0, 1.0, 1.0);
const vec3 ACCENT = vec3(122.0 / 255.0, 96.0 / 255.0, 52.0 / 255.0);

void main() {
    vec4 color = vertexColor;
    if (color.a == 0.0) discard;

    if (distance(color.rgb, WHITE) < 0.01 &&
        abs(color.a - ALPHA_TARGET) < 0.0001) {
        color.rgb = ACCENT;
    }

    fragColor = color * ColorModulator;
}