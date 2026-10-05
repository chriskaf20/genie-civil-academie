// Plate generated from a lesson's "Schéma de principe" step when the lesson's plate file
// has no plate of its own for that step: the listed stages drawn as a flow chart.
import { Flow, flowHeight } from '../components/figures/kit.jsx';

const strip = t => String(t || 'Schéma de principe').replace(/^Schéma de principe\s*[—–-]\s*/i, '');

/** Builds the plate, or null when the step lists no stage. */
export function principlePlate(step) {
  const items = (step?.diagram_description || []).map(d => String(d).replace(/\$/g, '')).filter(Boolean);
  if (!items.length) return null;
  const cols = items.length <= 4 ? 2 : 3;
  return {
    id: 'schema-de-principe',
    title: strip(step.title),
    steps: ['diagrams'],
    h: flowHeight(items, { cols }),
    draw: () => <Flow items={items} cols={cols} />,
    caption: step.description && !/^Les étapes clés/.test(step.description) ? step.description : 'Les étapes clés, dans l’ordre.',
  };
}
