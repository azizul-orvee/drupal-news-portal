<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/modules/views/templates/views-view-grid.html.twig */
class __TwigTemplate_46608b93d7d0b90e9f16b8d5e78ecd4e1ffa4f5c1b0e1a5158526b2dd56a140f extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = array("set" => 30, "if" => 37, "for" => 58);
        $filters = array("escape" => 54);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 30
        $context["classes"] = [0 => "views-view-grid", 1 => twig_get_attribute($this->env, $this->source,         // line 32
($context["options"] ?? null), "alignment", [], "any", false, false, true, 32), 2 => ("cols-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 33
($context["options"] ?? null), "columns", [], "any", false, false, true, 33), 33, $this->source)), 3 => "clearfix"];
        // line 37
        if (twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "row_class_default", [], "any", false, false, true, 37)) {
            // line 38
            echo "  ";
            // line 39
            $context["row_classes"] = [0 => "views-row", 1 => (((twig_get_attribute($this->env, $this->source,             // line 41
($context["options"] ?? null), "alignment", [], "any", false, false, true, 41) == "horizontal")) ? ("clearfix") : (""))];
        }
        // line 45
        if (twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "col_class_default", [], "any", false, false, true, 45)) {
            // line 46
            echo "  ";
            // line 47
            $context["col_classes"] = [0 => "views-col", 1 => (((twig_get_attribute($this->env, $this->source,             // line 49
($context["options"] ?? null), "alignment", [], "any", false, false, true, 49) == "vertical")) ? ("clearfix") : (""))];
        }
        // line 53
        if (($context["title"] ?? null)) {
            // line 54
            echo "  <h3>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 54, $this->source), "html", null, true);
            echo "</h3>
";
        }
        // line 56
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 56), 56, $this->source), "html", null, true);
        echo ">
  ";
        // line 57
        if ((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "alignment", [], "any", false, false, true, 57) == "horizontal")) {
            // line 58
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 59
                echo "      <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 59), "addClass", [0 => ($context["row_classes"] ?? null), 1 => ((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "row_class_default", [], "any", false, false, true, 59)) ? (("row-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 59), 59, $this->source))) : (""))], "method", false, false, true, 59), 59, $this->source), "html", null, true);
                echo ">
        ";
                // line 60
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 60));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                    // line 61
                    echo "          <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["column"], "attributes", [], "any", false, false, true, 61), "addClass", [0 => ($context["col_classes"] ?? null), 1 => ((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "col_class_default", [], "any", false, false, true, 61)) ? (("col-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 61), 61, $this->source))) : (""))], "method", false, false, true, 61), 61, $this->source), "html", null, true);
                    echo ">";
                    // line 62
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "content", [], "any", false, false, true, 62), 62, $this->source), "html", null, true);
                    // line 63
                    echo "</div>
        ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 65
                echo "      </div>
    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 67
            echo "  ";
        } else {
            // line 68
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                // line 69
                echo "      <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["column"], "attributes", [], "any", false, false, true, 69), "addClass", [0 => ($context["col_classes"] ?? null), 1 => ((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "col_class_default", [], "any", false, false, true, 69)) ? (("col-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 69), 69, $this->source))) : (""))], "method", false, false, true, 69), 69, $this->source), "html", null, true);
                echo ">
        ";
                // line 70
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["column"], "content", [], "any", false, false, true, 70));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                    // line 71
                    echo "          <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 71), "addClass", [0 => ($context["row_classes"] ?? null), 1 => ((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "row_class_default", [], "any", false, false, true, 71)) ? (("row-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 71), 71, $this->source))) : (""))], "method", false, false, true, 71), 71, $this->source), "html", null, true);
                    echo ">";
                    // line 72
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
                    // line 73
                    echo "</div>
        ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 75
                echo "      </div>
    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 77
            echo "  ";
        }
        // line 78
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/modules/views/templates/views-view-grid.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  255 => 78,  252 => 77,  237 => 75,  222 => 73,  220 => 72,  216 => 71,  199 => 70,  194 => 69,  176 => 68,  173 => 67,  158 => 65,  143 => 63,  141 => 62,  137 => 61,  120 => 60,  115 => 59,  97 => 58,  95 => 57,  90 => 56,  84 => 54,  82 => 53,  79 => 49,  78 => 47,  76 => 46,  74 => 45,  71 => 41,  70 => 39,  68 => 38,  66 => 37,  64 => 33,  63 => 32,  62 => 30,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/modules/views/templates/views-view-grid.html.twig", "/Applications/MAMP/htdocs/drupal-9v2/core/modules/views/templates/views-view-grid.html.twig");
    }
}
