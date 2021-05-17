﻿using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DasContract.Editor.Web.Shared
{
    public partial class ToolBar: ComponentBase
    {
        [Parameter]
        public IList<ToolBarItem> ToolBarItems { get; set; } = new List<ToolBarItem>();
    }
}
