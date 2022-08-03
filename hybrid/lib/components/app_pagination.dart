import 'package:flutter/material.dart';

class AppPagination extends StatefulWidget {
  AppPagination(
      {Key? key,
      required this.currentPage,
      required this.totalCount,
      required this.totalPages,
      required this.pageSize,
      required this.onPageChanged,
      this.showFirstLastButtons = false,
      this.initialFirstRowIndex = 0,
      this.rowsPerPage = defaultRowsPerPage,
      this.availableRowsPerPage = const <int>[
        defaultRowsPerPage,
        defaultRowsPerPage * 2,
        defaultRowsPerPage * 5,
        defaultRowsPerPage * 10
      ],
      this.onRowsPerPageChanged,
      this.arrowHeadColor})
      : assert(rowsPerPage > 0),
        assert(() {
          if (onRowsPerPageChanged != null) {
            assert(availableRowsPerPage != null &&
                availableRowsPerPage.contains(rowsPerPage));
          }
          return true;
        }()),
        super(key: key);

  static const int defaultRowsPerPage = 10;

  int currentPage;
  int totalPages;
  int totalCount;
  int pageSize;

  Function(int) onPageChanged;

  bool showFirstLastButtons;
  int initialFirstRowIndex;

  Color? arrowHeadColor;

  int rowsPerPage;

  /// The callback that is called when the page is changed.
  final ValueChanged<int?>? onRowsPerPageChanged;

  List<int>? availableRowsPerPage;

  @override
  State<AppPagination> createState() => _AppPaginationState();
}

class _AppPaginationState extends State<AppPagination> {
  late int _firstRowIndex;
  late int _rowCount;
  // late bool _rowCountApproximate;

  @override
  void initState() {
    super.initState();
    _firstRowIndex = (widget.currentPage * widget.pageSize) - widget.pageSize;
    _rowCount = widget.totalCount;
  }

  void _handleFirst() {
    widget.onPageChanged(1);
  }

  void _handlePrevious() {
    widget.onPageChanged(widget.currentPage - 1);
  }

  void _handleNext() {
    widget.onPageChanged(widget.currentPage + 1);
  }

  void _handleLast() {
    widget.onPageChanged(widget.totalPages);
  }

  bool _isNextPageUnavailable() =>
      // !_rowCountApproximate &&
      (_firstRowIndex + widget.pageSize >= widget.totalCount);

  @override
  Widget build(BuildContext context) {
    final ThemeData themeData = Theme.of(context);
    final MaterialLocalizations localizations =
        MaterialLocalizations.of(context);
    // FOOTER
    final TextStyle? footerTextStyle = themeData.textTheme.caption;
    final List<Widget> footerWidgets = <Widget>[];
    if (widget.onRowsPerPageChanged != null) {
      final List<Widget> availableRowsPerPage = widget.availableRowsPerPage!
          .where((int value) =>
              value <= widget.totalCount || value == widget.rowsPerPage)
          .map<DropdownMenuItem<int>>((int value) {
        return DropdownMenuItem<int>(
          value: value,
          child: Text('$value'),
        );
      }).toList();
      footerWidgets.addAll(<Widget>[
        Container(
            width:
                14.0), // to match trailing padding in case we overflow and end up scrolling
        Text(localizations.rowsPerPageTitle),
        ConstrainedBox(
          constraints: const BoxConstraints(
              minWidth: 64.0), // 40.0 for the text, 24.0 for the icon
          child: Align(
            alignment: AlignmentDirectional.centerEnd,
            child: DropdownButtonHideUnderline(
              child: DropdownButton<int>(
                items: availableRowsPerPage.cast<DropdownMenuItem<int>>(),
                value: widget.pageSize,
                onChanged: widget.onRowsPerPageChanged,
                style: footerTextStyle,
              ),
            ),
          ),
        ),
      ]);
    }
    footerWidgets.addAll(<Widget>[
      Container(width: 32.0),
      Text(
        localizations.pageRowsInfoTitle(
            _firstRowIndex + 1,
            _firstRowIndex + widget.pageSize,
            _rowCount,
            // _rowCountApproximate,
            false),
      ),
      Container(width: 32.0),
      if (widget.showFirstLastButtons)
        IconButton(
          icon: Icon(Icons.skip_previous, color: widget.arrowHeadColor),
          padding: EdgeInsets.zero,
          tooltip: localizations.firstPageTooltip,
          onPressed: _firstRowIndex <= 0 ? null : _handleFirst,
        ),
      IconButton(
        icon: Icon(Icons.chevron_left, color: widget.arrowHeadColor),
        padding: EdgeInsets.zero,
        tooltip: localizations.previousPageTooltip,
        onPressed: _firstRowIndex <= 0 ? null : _handlePrevious,
      ),
      Container(width: 24.0),
      IconButton(
        icon: Icon(Icons.chevron_right, color: widget.arrowHeadColor),
        padding: EdgeInsets.zero,
        tooltip: localizations.nextPageTooltip,
        onPressed: _isNextPageUnavailable() ? null : _handleNext,
      ),
      if (widget.showFirstLastButtons)
        IconButton(
          icon: Icon(Icons.skip_next, color: widget.arrowHeadColor),
          padding: EdgeInsets.zero,
          tooltip: localizations.lastPageTooltip,
          onPressed: _isNextPageUnavailable() ? null : _handleLast,
        ),
      Container(width: 14.0),
    ]);
    return Column(
      children: [
        DefaultTextStyle(
          style: footerTextStyle!,
          child: IconTheme.merge(
            data: const IconThemeData(
              opacity: 0.54,
            ),
            child: SizedBox(
              // TODO(bkonyi): this won't handle text zoom correctly,
              //  https://github.com/flutter/flutter/issues/48522
              height: 56.0,
              child: SingleChildScrollView(
                // dragStartBehavior: widget.dragStartBehavior,
                scrollDirection: Axis.horizontal,
                reverse: true,
                child: Row(
                  children: footerWidgets,
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
