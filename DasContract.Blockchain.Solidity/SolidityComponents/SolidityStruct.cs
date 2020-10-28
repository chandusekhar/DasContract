﻿using Liquid.NET;
using Liquid.NET.Constants;
using System.Linq;
using System.Collections.Generic;
using DasContract.Abstraction.Data;

namespace DasContract.Blockchain.Solidity.SolidityComponents
{
    public class SolidityStruct : SolidityComponent
    {
        LiquidString structName;
        IList<SolidityComponent> body;

        static readonly LiquidTemplate template = LiquidTemplate.Create(
            "{{indent}}struct {{name}}" +
            "{\n" +
            "{{body}}" +
            "{{indent}}}\n").LiquidTemplate;

        public SolidityStruct(string name)
        {
            structName = LiquidString.Create(name);
            body = new List<SolidityComponent>();
        }

        public SolidityStruct AddToBody(SolidityStatement statement)
        {
            body.Add(statement);
            return this;
        }

        public override LiquidString ToLiquidString(int indent)
        {
            return LiquidString.Create(ToString(indent));
        }

        public LiquidString TypeName()
        {
            var lower = structName.ToString().ToLower();
            return LiquidString.Create(lower.First().ToString().ToUpper() + lower.Substring(1));
        }

        public LiquidString VariableName()
        {
            return LiquidString.Create(structName.ToString().ToLower());
        }

        public LiquidString GetParamteres()
        {
            string s = "{";
            /* TODO i guess
            foreach (var p in Entity.Properties)
            {
                if(!p.PropertyType == PropertyType.Single) 
                    s += (Helpers.PropertyTypeToString(p) + ": " + Helpers.GetDefaultValueString(p) + ", ");
            }
            */
            return LiquidString.Create(s.Trim().Trim(',') + "}");
        }

        public override string ToString(int indent = 0)
        {
            ITemplateContext ctx = new TemplateContext();
            ctx.DefineLocalVariable("indent", CreateIndent(indent)).
                DefineLocalVariable("name", TypeName()).
                DefineLocalVariable("varName", VariableName()).
                //DefineLocalVariable("parameters", GetParamteres()).
                DefineLocalVariable("body", BodyToLiquid(indent));
            return template.Render(ctx).Result;
        }

        LiquidCollection BodyToLiquid(int indent)
        {
            var col = new LiquidCollection();
            foreach (var b in body)
                col.Add(b.ToLiquidString(indent + 1));
            return col;
        }
    }
}